import {MainLayout} from "../components/MainLayout"
import { useStore } from 'effector-react'
import {$posts, getPosts, setCurrentPost} from "../store/store"
import {useEffect, useRef, useState} from "react"
import PostList from "../components/PostList"
import PostItem from "../components/PostItem"
import MyDialog from "../components/MyDialog"

export default function Posts() {

	const posts = useStore($posts)
	const [visible, setVisible] = useState(false)

	const handleCreateClick = () => {
		setVisible(true)
		setCurrentPost({title: '', body: ''})
	}

	useEffect(() => {
		getPosts()
	}, [])

	return (
		<MainLayout title={'Posts'}>
			<h1>Posts page</h1>
			<button
				onClick={handleCreateClick}
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
			>Create post</button>
			<PostList>
				{posts.map(post => (
					<PostItem key={post.id} setVisible={setVisible} post={post}/>
				))}
			</PostList>
			<MyDialog visible={visible} setVisible={setVisible}/>
		</MainLayout>
	)
}