import {createEffect, createEvent, createStore} from 'effector'
import axios from 'axios'

export const getPosts = createEffect('get posts').use(async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts/?_limit=10')
	return response.data
})

export const createPost = createEffect('create post').use(async (post) => {
	const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
	return response.data
})

export const patchPost = createEffect('patch post').use(async (data) => {
	const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data.data)
	return response.data
})

export const putPost = createEffect('put post').use(async (data) => {
	const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data.data)
	return response.data
})

export const deletePost = createEffect('delete post').use(async (id) => {
	const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
	return response.data
})

const addPost = (state, data) => {
	state.unshift(data.result)
	return [...state]
}

const updatePost = (state, data) => {
	console.log(data)
	return state.map(post => post.id === data.result.id ? data.result : post)
}

const filterPosts = (state, data) => {
	return state.filter(post => post.id !== data.params)
}

export const setCurrentPost = createEvent()

export const $currentPost = createStore({title: '', body: ''})
	.on(setCurrentPost, (state, currentPost) => {
		return currentPost
	})

export const $posts = createStore([])
	.on(getPosts.done, (state, {result}) => result)
	.on(createPost.done, addPost)
	.on(patchPost.done, updatePost)
	.on(putPost.done, updatePost)
	.on(deletePost.done, filterPosts)