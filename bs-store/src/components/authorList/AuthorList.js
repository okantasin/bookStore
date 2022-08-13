import React from 'react'
import { Avatar, AvatarGroup, Tooltip } from '@mui/material';

export default function AuthorList({authors}) {

    return (
        <AvatarGroup max={4}>
          {authors.map((author) => {
            const { authorId, authorName, authorSurname } = author;
            return (
              <Tooltip key={authorId} title={`${authorName} ${authorSurname}`}>
                <Avatar
                  alt={`${authorName} ${authorSurname}`}
                  src={`/authors/${authorId % 121}.jpg`}
                />
              </Tooltip>
            );
          })}
        </AvatarGroup>
      );
}

