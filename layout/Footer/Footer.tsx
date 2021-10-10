import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import сn from 'classnames';
import { format } from 'date-fns';



export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={сn(className, styles.footer__body)} {...props}>
            <div className={styles.footer__copy}>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <div className={styles.footer__terms}>
                <a href="https://www.google.com/">Пользовательское соглашение</a>
            </div>
            <div className={styles.footer__policy}>
                <a href="https://www.google.com/">Политика конфиденциальности</a>
            </div>
        </footer>
    );
};