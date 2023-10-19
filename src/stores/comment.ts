import { defineStore } from 'pinia';

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    comments: {} as Record<string, string[]>,
  }),
  actions: {
    /**
     * Add a comment to the given key.
     * 
     * @param key The key for the comment.
     * @param comment The comment string to be added.
     */
    addComment(key: string, comment: string ) {
      if (!this.comments[key]) {
        this.comments[key] = [];
      }
      this.comments[key].push(comment);
    },
    getComments(key: string) {
      return this.comments[key] || [];
    },
    getAllComments() {
      return this.comments;
    }
  },
});