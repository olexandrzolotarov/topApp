import { PProps } from './P.props';
import styles from './P.module.css';
import сn from 'classnames';



export const P = ({ children, size = 'small', className, ...props }: PProps): JSX.Element => {
    return (
        <div className={сn(styles.p, className, {
            [styles.small]: size == 'small',
            [styles.middle]: size == 'middle',
            [styles.large]: size == 'large'
        })}
            {...props}
        >
            {children}
        </div>
    );
};