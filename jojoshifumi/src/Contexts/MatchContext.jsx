import { createContext, useState } from "react";
import matchsActions from "./Actions/match-fecth";
export const MatchListContext = createContext(null);

const MatchListProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);

  const fetchMatches = () => {
    return matchsActions.fetch().then((data) => setMatches(data));
  };

  const deleteMatch = (match) => {
    return matchsActions
      .delete(match)
      .then(() => setMatches(matches.filter((m) => m.id !== match.id)));
  };

  const addMatch = (match) => {
    return matchsActions.add(match).then((data) => setMatches([data, ...matches]));
  };

  const editMatch = (match, newValue) => {
    
    return matchsActions.edit(match, newValue).then((data) =>
      setMatches(
        matches.map((m) => {
          if (m.id === data.id) {
            m = data;
          }
          return m;
        })
      )
    );
  };

  const toggleMatchStatus = (match) => {
    return editMatch(match, {
      status: !match.status,
    });
  };

  return (
    <MatchListContext.Provider
      value={{
        matches,
        editMatch,
        addMatch,
        deleteMatch,
        toggleMatchStatus,
        fetchMatches,
      }}
    >
      {children}
    </MatchListContext.Provider>
  );
};

export default MatchListProvider;
