import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const ListItem = ({ name, author, active = false, onClick }) => {
  let nameToRender = name;
  let autorToRender = author;

  if (name && name.length > 25) {
    nameToRender = `${name.substring(0, 24)}...`
  }

  if (author && author.length > 25) {
    autorToRender = `${author.substring(0, 24)}...`
  }

  return (
    <div className={cn("list-item", { "active": active })} onClick={onClick}>
      <div className="file-name">
        <h2 className="no-padding">{nameToRender || 'Not Available'}</h2>
      </div>
      <div className="author-name">
        <h3 className="no-padding">{autorToRender || '-'}</h3>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

export default ListItem;
