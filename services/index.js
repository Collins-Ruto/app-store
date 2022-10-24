import { request, gql } from "graphql-request";
import React from "react";

const graphqlAPI = process.env.NEXT_PUBLIC_APPLATE_BLOG_ENDPOINT;

export const getCategories = async () => {
  const query = gql`
    query Apps {
      categoriesConnection {
        edges {
          node {
            name
            slug
            apps {
              category
              content_rating
              created
              description
              downloads
              icon
              market_url
              rating
              short_desc
              similar
              size
              slug
              title
              website
              version
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categoriesConnection.edges;
};

export const submitApps = async (obj) => {
  const result = await fetch("/api/apps", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const submitCategories = async (obj) => {
  const result = await fetch("/api/categories", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  return result.json();
};
