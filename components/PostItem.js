import {deletePost, setCurrentPost} from "../store/store"
import {useState} from "react"

const PostItem = ({post, setVisible}) => {

	const getCurrentPost = () => {
		setCurrentPost(post)
		setVisible(true)
	}

	return (
		<div style={{
			display: 'block',
			justifyContent: 'center',
			alignItems: 'center',
			border: '2px solid lightblue',
			padding: '0 10px',
			marginBottom: '10px',
			borderRadius: '10px'
		}}>
			<div>
				<h4>{post.title}</h4>
			</div>
			<div>
				<p>{post.body}</p>
			</div>
			<div style={{marginBottom: '10px'}}>
				<button
					onClick={getCurrentPost}
					style={{
					outline: 'none',
					border: 'none',
					borderRadius: '8px',
					background: 'rgb(56,157,212)',
					textDecoration: 'none',
					color: '#fff',
					userSelect: 'none',
					padding: '7px 13px',
				}}>Edit</button>
				<button
					onClick={() => deletePost(post.id)}
					style={{
					outline: 'none',
					border: 'none',
					borderRadius: '8px',
					background: 'rgb(212,75,56)',
					textDecoration: 'none',
					color: '#fff',
					userSelect: 'none',
					padding: '7px 13px',
					marginLeft: '10px'
				}}>Delete</button>
			</div>
		</div>
	)
}

export default PostItem