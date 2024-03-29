import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import сn from 'classnames';



export const Button = ({ appearence, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button className={сn(styles.button, className, {
            [styles.primary]: appearence == 'primary',
            [styles.ghost]: appearence == 'ghost'
        })}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={сn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon />
            </span>}
        </button>
    );
};