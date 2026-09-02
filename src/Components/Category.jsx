import React from 'react';
import categories from '../Jobs/Category';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <>
      <h3 style={{ margin: "20px 80px" }}>
        Browse By Category
      </h3>

      <div className="category-section">

        {
          categories.map((data, id) => {

            return (
              <Link
                to={`/category/${encodeURIComponent(data.name)}`}
                key={id}
                style={{
                  textDecoration: "none",
                  color: "inherit"
                }}
              >

                <div className="category-card">

                  <img
                    className="category-img"
                    src={data.logo}
                    alt={data.name}
                  />

                  <p>{data.name}</p>

                </div>

              </Link>
            );

          })
        }

      </div>
    </>
  );
};

export default Category;