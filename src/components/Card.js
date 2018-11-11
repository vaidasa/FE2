import React from 'react';
import { getImageUrl } from '../../config';

export default class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      opened: false,
    };
  }

  toggleSummary = () => {
    const { opened } = this.state;

    this.setState({
      opened: !opened,
    });
  };

  toggleHearth = () => {

    this.props.likedList.includes(this.props.movie.id)
       ? this.props.onUnliked(this.props.movie.id)
       : this.props.onLiked(this.props.movie.id);

    this.setState({});

  };

  render() {

    const {
      movie: {
        backdrop_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
        id,
      },
      likedList,
    } = this.props;
    const { opened } = this.state;


    return (
      <div className="card">
        <div
          className="card__image"
          style={{ backgroundImage: `url(${getImageUrl(backdrop_path)})` }}
        />

        <div className="card__title">
          {original_title}
        </div>

        <div className="card__like">
          {likedList.includes(id)
            ? <i className="fa fa-heart" onClick={this.toggleHearth} />
            : <i className="fa fa-heart-o" onClick={this.toggleHearth} />
          }

        </div>

        <div className="card__subtitle">
          <span>{release_date}</span>
          <span>{vote_average} ({vote_count} votes)</span>
        </div>

        <div className="card-info">
          <div className="card-info__header" onClick={this.toggleSummary}>
            Summary
          </div>

          {opened
            ? <div className="card-info__description">{overview}</div>
            : null
          }

        </div>
      </div>
    );
  }
}
