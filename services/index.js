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

export const getApps = async () => {
  const query = gql`
    query Apps {
      appsConnection {
        edges {
          node {
            content_rating
            created
            description
            downloads
            icon
            market_url
            rating
            size
            slug
            short_desc
            similar
            title
            version
            website
            category
            categories {
              slug
              name
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.appsConnection.edges;
};

export const getAllCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getTopApps = async () => {
  const query = gql`
    query MyQuery {
      appsConnection(first: 10, orderBy: rating_DESC) {
        edges {
          node {
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
            version
            website
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.appsConnection.edges;
};

export const getCategoryApps = async (slug) => {
  const query = gql`
    query getCategoryApps($slug: String!) {
      appsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            content_rating
            created
            description
            downloads
            icon
            market_url
            rating
            size
            slug
            short_desc
            similar
            title
            version
            website
            category
            categories {
              slug
              name
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, {slug});

  return result.appsConnection.edges;
};
export const getAppDetails = async (slug) => {
  const query = gql`
    query Apps($slug: String!) {
      app(where: { slug: $slug }) {
        category
        created
        content_rating
        description
        descriptions {
          raw
        }
        downloads
        icon
        market_url
        rating
        short_desc
        similar
        size
        slug
        title
        version
        website
        updatedAt
        application {
          url
          fileName
          size
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, {slug});

  return result.app;
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
