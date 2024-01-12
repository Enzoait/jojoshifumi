export default {
    fetch: async function () {
      const _data = localStorage.getItem("matches");
      this.data = _data ? JSON.parse(_data) : [];
      return this.data;
    },
    delete: async function (match) {
      this.data = this.data.filter((m) => m.id !== match.id);
      localStorage.setItem("matches", JSON.stringify(this.data));
      return true;
    },
    add: async function (match) {
      this.data.push(match);
      localStorage.setItem("matches", JSON.stringify(this.data));
      return match;
    },
    edit: async function (oldMatch, newMatch) {
      const value = null;
      this.data = this.data.map((m) => {
        if (m.id === oldMatch.id) {
          value = { ...m, ...newMatch };
          return value;
        } else {
          return m;
        }
      });
      localStorage.setItem("matches", JSON.stringify(this.data));
      return value;
    },
  };