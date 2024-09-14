import { FC } from 'react';
import { generateUniqueKey } from '../../../../utils/index.js';
import styles from './search.module.scss';

export type SearchListProps = {
  func: () => void;
  content: {
    name: string;
  }[];
  placeholder: string;
};

export const SearchList: FC<SearchListProps> = ({ func, content, placeholder }) => (
  <select className={styles.search} onChange={func}>
    <option value="" disabled selected>
      {placeholder}
    </option>

    {content.map(({ name }, index) => (
      <option key={generateUniqueKey(index)} value={name}>
        {name}
      </option>
    ))}
  </select>
);
