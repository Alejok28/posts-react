import React from 'react';
import { Image, Item, Icon, Divider } from 'semantic-ui-react'

const Post = ({ post, onClickVoteUp, onClickVoteDown }) => {
  return (
		<div id={post.id} className='item-group'>
			<Item.Group >
				<Item>
					<Item.Image  src={post.post_image_url} />
					<Item>
						<Item.Content className='item-votes'>
							<Icon  onClick={onClickVoteUp} link name='triangle up' />
							{post.votes}
							<Icon onClick={onClickVoteDown} link name='triangle down' />
						</Item.Content>
					</Item>
					<Item.Content>
						<Item.Header>
							<a href={post.url} target="_blank">{post.title}</a>
						</Item.Header>
						<Item.Description>{post.description}</Item.Description>
						<Item.Meta> Escrito por:
							<Image src={post.writer_avatar_url} avatar />
						</Item.Meta>
					</Item.Content>
				</Item>
			</Item.Group>
			<Divider />
		</div>
  )
}

export default Post;
