import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, createComment, unloadCreate } from 'src/modules/fund';

const useCommentCreate = ({ fund_id }) => {
  const { fund, content, create, createError } = useSelector(({ fund }) => ({
    fund: fund.fund,
    content: fund.comment_content,
    create: fund.create,
    createError: fund.createError,
  }));
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(createComment({ user: 1, funding: fund_id, content }));
  };
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  useEffect(() => {
    if (create) {
      dispatch(unloadCreate());
    }
    if (createError) {
      console.log(createError);
    }
  }, [create]);
  return {
    onSubmit,
    onChangeField,
    content,
  };
};

export default useCommentCreate;
