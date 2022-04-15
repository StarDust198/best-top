import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({
  size = 'm',
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.sizeM]: size == 'm',
        [styles.sizeS]: size == 's',
        [styles.sizeL]: size == 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
