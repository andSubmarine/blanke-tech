<template>
  <b-row>
    <b-card-group
      v-if="loadedArticles && loadedArticles.length > 0"
      class="card-container"
    >
      <nuxt-link
        v-for="article in loadedArticles"
        :key="article.slug"
        :to="{ name: 'articles-id', params: {id: article.slug}}"
        class="article-card"
        aria-label="read article"
      >
        <b-card
          :title="article.title"
          :img-src="article.url"
          :img-alt="article.alt"
          img-top
          tag="article"
        >
          <b-card-text>
            {{ article.description }}
          </b-card-text>
          <template #footer>
            <small class="text-muted">Published {{ publishedAt(article) }}</small>
            <div class="d-flex justify-content-center">
              <div class="m-2">
                Tags:
              </div>
              <div v-for="tag in tags(article)" :key="tag" class="tag m-2">
                {{ tag }}
              </div>
            </div>
          </template>
        </b-card>
      </nuxt-link>
    </b-card-group>
    <b-col id="#more">
      <a
        v-if="hasMoreArticles"
        id="load-more"
        href="javascript:void(0)"
        @click="increaseArticleLimit()"
      > Load more...
      </a>
      <p v-else id="no-more">
        <font-awesome-icon icon="sad-cry" />
        No more articles
        <font-awesome-icon icon="sad-cry" />
      </p>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ArticleContainer extends Vue {
    @Prop() articles!: Array<any>;

    readonly incr = 4

    limit = this.incr

    get loadedArticles () {
      return this.articles.filter((_, idx) => idx < this.limit)
    }

    get hasMoreArticles () { return this.loadedArticles.length !== this.articles.length }

    increaseArticleLimit () {
      if (this.limit + this.incr > this.articles.length) {
        this.limit = this.articles.length
        return
      }
      this.limit += this.incr
    }

    publishedAt (article: any) {
      return new Date(article.published).toLocaleString('en-GB', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      })
    }

    tags (article: any) {
      if (article.tags) {
        return article.tags
      } else { return [] }
    }
}
</script>

<style lang="scss">
.card-container {
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.article-card {
  flex: 1 0 100%;
  box-sizing: border-box;
  margin: 1rem .25em;
  text-decoration: none !important;
  color: black;
  & :hover {
      color: black;
  }

  & .card {
    height: 100%;
    & .card-img-top {
      height: 45%;
    }
    & .card-title {
      font-size: 5vw;
    }
    & .card-body {
      font-size: 4vw;
    }
    & .card-footer {
      font-size: 3vw;
      .tag {
        font-size: 2.5vw;
        background-color: black;
        color: white;
        border-radius: .5rem;
        padding: .05rem .4rem;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
        & :hover {
            color: white !important;
        }
      }
    }
  }
}

#more {
  margin: 3vh;
  font-family: monospace;
}

#load-more {
  text-decoration: underline;
}

#load-more, #no-more {
  color: #fff;
  font-size: 5vw;
}

@media (min-width: 768px) {
  .article-card {
    max-width: calc(50% -  1em);
    & .card {
      & .card-title {
        font-size: 4vw;
      }
      & .card-body {
        font-size: 3vw;
      }
      & .card-footer {
        font-size: 2vw;
        .tag {
          font-size: 1.5vw;
        }
      }
    }
  }

  #load-more, #no-more {
    font-size: 4vw;
  }
}

@media (min-width: 992px) {
  .article-card {
    max-width: calc(32.4%);
    & .card {
      & .card-title {
        font-size: 3vw;
      }
      & .card-body {
        font-size: 2vw;
      }
      & .card-footer {
        font-size: 1.5vw;
        .tag {
          font-size: 1.2vw;
        }
      }
    }
  }

  #load-more, #no-more {
    font-size: 3vw;
  }
 }

@media (min-width: 1400px) {
  .article-card {
    max-width: calc(25% - 1em);
    & .card {
      & .card-title {
        font-size: 2.5vw;
      }
      & .card-body {
        font-size: 1.5vw;
      }
      & .card-footer {
        font-size: 1vw;
        .tag {
          font-size: .8vw;
        }
      }
    }
  }

  #load-more, #no-more {
    font-size: 2vw;
  }
 }
@media (min-width: 2000px) {
  .article-card .card {
    & .card-title {
      font-size: 2vw;
    }
    & .card-body {
      font-size: 1vw;
    }
    & .card-footer {
      font-size: .8vw;
      .tag {
        font-size: .8vw;
      }
    }
  }
 }
</style>
