import { FC, ReactNode, useState } from 'react';

interface AccordionItemConfig {
  title: string;
  icon?: string;
  children: ReactNode;
  rightElement?: ReactNode;
}

interface AccordionGroupProps {
  items?: AccordionItemConfig[];
  children?: (state: {
    openIndex: number | null;
    toggleItem: (index: number) => void;
  }) => ReactNode;
  className?: string;
}

interface AccordionItemProps extends AccordionItemConfig {
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionGroup: FC<AccordionGroupProps> = ({ items, children, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(current => current === index ? null : index);
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items?.map((item, index) => (
        <AccordionItem
          key={`${item.title}-${index}`}
          title={item.title}
          icon={item.icon}
          rightElement={item.rightElement}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
        >
          {item.children}
        </AccordionItem>
      ))}
      {children?.({ openIndex, toggleItem })}
    </div>
  );
};

export const AccordionItem: FC<AccordionItemProps> = ({
  title,
  icon,
  children,
  rightElement,
  isOpen,
  onToggle
}) => {
  return (
    <section className="overflow-hidden rounded-lg border border-glass-border bg-black/20 shadow-lg transition-colors duration-200 hover:bg-black/30">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-3 px-4 py-3 text-left"
      >
        <i
          className={`fa-solid fa-chevron-right text-amazon-orange transition-transform duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
          aria-hidden="true"
        ></i>
        {icon && <i className={`${icon} text-gray-300`} aria-hidden="true"></i>}
        <span className="min-w-0 flex-1 font-outfit text-sm font-bold uppercase tracking-wide text-white">
          {title}
        </span>
        {rightElement && <span className="shrink-0">{rightElement}</span>}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-1">
          {children}
        </div>
      </div>
    </section>
  );
};
