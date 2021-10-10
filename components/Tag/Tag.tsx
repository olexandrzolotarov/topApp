import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import сn from 'classnames';

export const Tag = ({ children, size = 'small', color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
    return (
        <div className={сn(styles.tag, className, {
            [styles.small]: size == 'small',
            [styles.middle]: size == 'middle',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.grey]: color == 'grey',
            [styles.green]: color == 'green',
            [styles.primary]: color == 'primary'
        })}
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};