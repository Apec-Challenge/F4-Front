import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, createComment, unloadCreate } from 'src/modules/fund';

const useCommentCreate = ({ fund_id }) => {
  const { auth, content, create, createError } = useSelector(({ fund, auth }) => ({
    auth: auth.authLogin,
    content: fund.comment_content,
    create: fund.create,
    createError: fund.createError,
  }));
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(createComment({ user: auth.pk, funding: fund_id, content }));
  };
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  useEffect(() => {
    if (create) {
      dispatch(unloadCreate());
    }
    if (createError) {
      console.log(createError);
    }
  }, [dispatch, create, createError]);
  return {
    onSubmit,
    onChangeField,
    content,
  };
};

export default useCommentCreate;
