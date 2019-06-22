import React from "react"
import { Link } from "gatsby"

import { SEO, Layout } from "components/organisms"
import { Image } from "components/molecules"

import { Query } from "react-apollo"
import gql from "graphql-tag"

const PLAYER_QUERY = gql`
  query Player($faceitUsername: String!) {
    player(faceitUsername: $faceitUsername) {
      nickname
      stats {
        faceit {
          player {
            avatar
            skill_level
            game_player_name
          }
          stats
        }
        pubg {
          gameMode
          stats
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>

    <Query query={PLAYER_QUERY} variables={{ faceitUsername: "ReiTone" }}>
      {({ data, loading, error }) => {
        if (loading) return <span>Loading...</span>
        if (error) return <span>Error!</span>
        const kd = data.player.stats.faceit.stats["K/D Ratio"]
        return <h1>KD: {kd}</h1>
      }}
    </Query>
  </Layout>
)

export default IndexPage
