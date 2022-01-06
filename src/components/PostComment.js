import React ,{useState} from 'react'
import { PostSection,CommentForm ,CommentFiled , PostSectionTitle ,SubmitFiled ,CommentDataFiled} from './PostComment.styles'

import { useForm } from 'react-hook-form'
import axios from 'axios';

const baseURL = "http://test.steps.me/test/testAssignComment";

const PostComment = () => {
  const { register, handleSubmit, reset } = useForm(); //holding the form data
  const [submited, setSubmited] = useState(false); // holding the submiting status

  //handle submit. if all fields has fulfilled, send it to the API as post method, and reset the form for ready state again
  const onSubmit = (data) => {
    setSubmited(true);
    reset();

    // post the comment to the API only after validating
    axios
      .post(baseURL, {
        method: "POST",
        body: JSON.stringify({
          name: data.Name,
          email: data.Email,
          title: data.title,
          comment: data.Comment,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  //Render form and notifying the user if submitting has successfully submitted
  return (
    <>
      <PostSection>
        <PostSectionTitle>Submit your own comment!</PostSectionTitle>
        <CommentForm onSubmit={handleSubmit(onSubmit)}>
          <CommentFiled
            maxLength={50}
            placeholder="Your Name"
            {...register("Name")}
            required
          />
          <CommentFiled
            maxLength={50}
            placeholder="Your Email"
            type="email"
            {...register("Email")}
            required
          />
          <CommentFiled
            maxLength={50}
            placeholder="Comment Title"
            type="text"
            {...register("title")}
            required
          />
          <CommentDataFiled
            maxLength={300}
            placeholder="Your Thoughts"
            {...register("Comment")}
            required
          />
          <SubmitFiled type="submit" />
        </CommentForm>
        {submited && <p>Thank You For Your Comment!</p>}
      </PostSection>
    </>
  );
}

export default PostComment
