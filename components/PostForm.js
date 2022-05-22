import {useEffect, useState} from "react"
import {$currentPost, createPost, patchPost, putPost} from "../store/store"
import {useStore} from "effector-react"


const PostForm = ({title, toggleModal}) => {

	const currentPost = useStore($currentPost)

	const [post, setPost] = useState(currentPost)

	useEffect(() => {
		setPost(currentPost)
	}, [currentPost])

	const changeHandle = (e) => {
		setPost({...post, [e.target.name]: e.target.value})
	}

	const addPost = (e) => {
		e.preventDefault()
		if (!post.title) return
		createPost(post)
		toggleModal(false)
	}

	const updatePost = (e) => {
		e.preventDefault()
		currentPost.title !== post.title && currentPost.body === post.body ? patchPost({
			id: post.id,
			data: {title: post.title}
		}) :
		currentPost.body !== post.body && currentPost.title === post.title ? patchPost({
			id: post.id,
			data: {body: post.body}
		}) :
		putPost({id: post.id, data: post})
		toggleModal(false)
	}

	return (
		<form style={{
			display: 'flex',
			flexDirection: 'column'
		}}>
			<input
				value={post.title}
				name={'title'}
				onChange={changeHandle}
				style={{
				border: '1px solid lightgray',
				height: '20px',
				paddingLeft: '5px',
				borderRadius: '4px',
				marginBottom: '10px'
			}}
        type="text"
				placeholder={'title'}
			/>
			<textarea
				value={post.body}
				name={'body'}
				onChange={changeHandle}
				style={{
					border: '1px solid lightgray',
					paddingLeft: '5px',
					borderRadius: '4px',
					marginBottom: '10px'
				}}
				placeholder={'description'}
			/>
			<button
				onClick={currentPost.title ? updatePost : addPost}
				style={{
					outline: 'none',
					border: 'none',
					borderRadius: '8px',
					width: '100px',
					background: 'rgb(56,157,212)',
					textDecoration: 'none',
					color: '#fff',
					userSelect: 'none',
					padding: '7px 13px',
			}}
			>{title}</button>
		</form>
	)
}

export default PostForm