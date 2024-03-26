'use client';

import IconChevronDown from '../Icons/IconChevronDown';
import { useState, useLayoutEffect, useRef, useEffect, FC } from 'react';
import './style.scss';

interface Props {
  title: string | JSX.Element;
  content?: string | JSX.Element;
  showTextSeeMore?: boolean;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
  automaticRecalculateHeight?: boolean;
  IconIsOpen?: JSX.Element;
  IconIsClose?: JSX.Element;
  keyFocusAccordion?: string;
  classNames?: {
    accordionBoxClass?: string;
    titleBoxClass?: string;
    contentBoxClass?: string;
  };
}

const Accordion: FC<Props> = ({
  title,
  content,
  onOpen,
  onClose,
  onToggle,
  IconIsOpen,
  IconIsClose,
  keyFocusAccordion,
  showTextSeeMore = false,
  isOpen = false,
  automaticRecalculateHeight = false,
  classNames = {}
}) => {
  const [isActive, setIsActive] = useState(isOpen);
  const [height, setHeight] = useState<number>(30);
  const refDivCollapse = useRef<HTMLDivElement>(null);
  const refBtn = useRef<HTMLButtonElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  const hasCustomIcons = IconIsOpen && IconIsClose;
  const { accordionBoxClass, titleBoxClass, contentBoxClass } = classNames;

  const handleToggle = () => {
    setIsActive(!isActive);
    onToggle?.(!isOpen);
  };

  useEffect(() => {
    setIsActive(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (keyFocusAccordion) {
      refContainer.current?.scrollIntoView({ behavior: 'smooth' });
      setIsActive(true);
    }
  }, [keyFocusAccordion]);

  useLayoutEffect(() => {
    if (isActive && refDivCollapse.current) {
      onOpen?.();
      setHeight(refDivCollapse.current.clientHeight);
    } else {
      onClose && onClose();
      setHeight(refBtn!.current!.clientHeight);
    }
  }, [isActive]);

  useLayoutEffect(() => {
    if (automaticRecalculateHeight) {
      const resizeObserver = new ResizeObserver(entry => {
        if (isActive) {
          setHeight(entry[0].target.clientHeight);
        }
      });

      if (isActive) {
        resizeObserver.observe(refDivCollapse.current!);
      }

      return () => {
        resizeObserver.unobserve(refDivCollapse.current!);
      };
    }

    return () => {};
  }, [isActive, automaticRecalculateHeight]);

  return (
    <div
      ref={refContainer}
      className={`acordion ${accordionBoxClass}`}
      data-testid='acordion-container'
      style={{
        height: `${height}px`
      }}
    >
      <div ref={refDivCollapse}>
        <button
          className={`acordion__button ${titleBoxClass} ${
            titleBoxClass && isActive ? `${titleBoxClass}--is-open` : ''
          }`}
          type='button'
          ref={refBtn}
          onClick={handleToggle}
        >
          <div className='acordion__title'>{title}</div>
          <div className='acordion__expand'>
            {showTextSeeMore && <span className='acordion__text'>{isActive ? 'Ver menos' : 'Ver más'}</span>}
            <div className={`acordion__icon `}>
              {!hasCustomIcons ? (
                <IconChevronDown className={`acordion__icon-chevron${isActive ? '' : '--is-open '}`} />
              ) : isActive ? (
                IconIsOpen
              ) : (
                IconIsClose
              )}
            </div>
          </div>
        </button>
        <div className={`acordion__content ${contentBoxClass}`}>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
