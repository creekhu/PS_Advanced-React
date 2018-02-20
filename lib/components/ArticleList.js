import React from 'react';
import Article from './Article';

//functional component always re-render -> so change into a pure component
class ArticleList extends React.PureComponent {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map(article =>
            <Article
              key={article.id}
              article={article}
            />
        )}
      </div>
    );
  }
}

export default ArticleList;
