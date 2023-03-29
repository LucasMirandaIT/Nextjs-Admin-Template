import styles from '../styles/tooltip.module.scss';

interface TooltipProps {
    text: string;
    position: string;
    children: any;
};

const Tooltip = ({ text, position = 'right', children }: TooltipProps) => {


    return (
        <div className={styles.tooltip}>
            {children}
            <span className={`${styles.tooltiptext} ${position}`}>{text}</span>
        </div>
    )
}

export default Tooltip;