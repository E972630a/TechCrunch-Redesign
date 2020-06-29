import React, { Component } from 'react';
import data from "../data/post.json";
import '../BlogPost/blogPost.css'
//used to send HTTP requests to back end
import axios from 'axios';

const Comment = props => (
  <tr>
      <td>{props.comment.comment_name}</td>
      <td>{props.comment.comment_description}</td>
  </tr>
)

export default class CreateComments extends Component {

  constructor(props){
    super(props);
    //binding state objects to 'this' since we are dealing with methods
    this.onChangeCommentName=this.onChangeCommentName.bind(this);
    this.onChangeCommentDescription=this.onChangeCommentDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   

    //setting and assigning state
    this.state = {
      comment_name:'',
      comment_description: '',
      comments: []
      
    }
  }
  //methods to update state properties
  onChangeCommentName(e){
    this.setState({
      comment_name:e.target.value
    });
  }
  onChangeCommentDescription(e){
    this.setState({
      comment_description:e.target.value
    });
  }

  //handle submit event, create new comment
    onSubmit(e){
      //prevent default submit behavior
      // e.preventDefault();
      console.log(`Form submitted:`);
      console.log(`Name: ${this.state.comment_name}`);
      console.log(`Comment Description: ${this.state.comment_description}`);

      const newComment = {
        comment_name: this.state.comment_name,
        comment_description: this.state.comment_description
      };
      //sending POST request to endpoint using axios, endpoint expects new comment in JSON 
      axios.post('http://localhost:4000/comments/add', newComment)
        .then(res => console.log(res.data))

      this.setState({
        comment_name:'',
        comment_description:''
      })

    }


//retreiving data from database
//axios gets access to comments endpoint
componentDidMount() {
  axios.get('http://localhost:4000/comments/')
      .then(response => {
          //once data available, assigning response.data to comments using setstate
          this.setState({ comments: response.data });
      })
      .catch(function (error){
          console.log(error);
      })
}

// mapping comments 
commentList() {
  return this.state.comments.map((currentComment, i) => {
      return <Comment comment={currentComment} key={i} />;
  })
}
  render() {
      var useThis=this
      let one = data.filter(it => new RegExp(1).test(it.id))
      return (
        <div>
          <div className="square__post">
          {one.map((data,i) => {
              return (
                <div key={i} >
                  <h2>{data.title}</h2>
              <img src={data.img} alt="aws logo"/>
                  <p>{data.date}</p>
                  <p>{data.content}</p>
                  </div>
                  );
          })}
                  <h3>Comments</h3>
                  <p> { this.commentList() }</p>

                <h3>Create Comment</h3>
                  
                <form onSubmit = {useThis.onSubmit}>
                  <div className= "form-group">
                    <label>Name:</label>
                    <input type="text"
                    className="form-control"
                    value={this.state.comment_name}
                    onChange={this.onChangeCommentName}
                    />
                  </div>
                  <div className = "form-group">
                    <label>Comment:</label>
                    <input type= "text"
                    className="form-control"
                    value={this.state.comment_description}
                    onChange={this.onChangeCommentDescription}
                    />
                    </div>
                    <div className="form-group">
                      <input 
                      type="submit"
                      value="Create Comment"
                      className="commentBTN"
                      />
                    </div>
                  
                </form>
                </div>
           
            
            
          

          <div className="recent__section">
            <h3>Recent Post</h3>
            {data.map(function (data, i) {
              return (
                <div key={i}>
                  <h4>{data.title}</h4>
                </div>
              );
            })}
            
          </div>
        </div>
      );
    
  }
}

