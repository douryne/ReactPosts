import React from 'react';
import MyInput from './UI/Input/MyInput';
import MySelect from './UI/Select/MySelect';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <hr style={{ color: 'whitesmoke', margin: '15px 0' }} />
      <MyInput
        type='text' 
        placeholder='Search...'
        onChange={e => setFilter({...filter, searchQuery: e.target.value})}
      />
      <MySelect
        value={filter.selectedSort}
        onSelectChange={selectedSort => setFilter({...filter, selectedSort: selectedSort})}
        options={[
          { name: 'Sort by title', value: 'title', },
          { name: 'Sort by description', value: 'body', }
        ]}
        defaultValue='Sort by'
      />
      <hr style={{ color: 'whitesmoke', margin: '15px 0' }} />
    </div>
  );
};

export default PostFilter;