import React, {useState} from 'react';
import { useBtnWithFilledForm } from '../hooks/useBtnWithFilledForm';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';

const PostForm = ({createPost}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const isFormFilled = useBtnWithFilledForm(post);

  const createNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    };
    createPost(newPost);
    setPost({title: '', body: ''})
  }

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type='text' 
        placeholder='Post name'
      />
      <MyInput
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type='text'
        placeholder='Post description'
      />
      <MyButton disabled={!isFormFilled} onClick={createNewPost}>Create post</MyButton>
  </form>
  );
};

export default PostForm;