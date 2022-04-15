import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
  size = 's',
  color = 'ghost',
  href,
  children,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.sizeM]: size == 'm',
        [styles.sizeS]: size == 's',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.primary]: color == 'primary',
        [styles.green]: color == 'green',
        [styles.grey]: color == 'grey',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
