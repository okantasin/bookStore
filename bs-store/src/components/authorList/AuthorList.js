import React from 'react'
import { Avatar, AvatarGroup, Tooltip } from '@mui/material';

export default function AuthorList({authors}) {

    return (
        <AvatarGroup max={4}>
          {authors.map((author) => {
            const { id, authorName, authorSurname } = author;
            return (
              <Tooltip key={id} title={`${authorName} ${authorSurname}`}>
                <Avatar
                  alt={`${authorName} ${authorSurname}`}
                  src={`/authors/${id % 121}.jpg`}
                />
              </Tooltip>
            );
          })}
        </AvatarGroup>
      );
}

