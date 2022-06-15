import React, { useEffect } from 'react';

const useDocumentTitle = (num) => {
  useEffect(() => {
    document.title = `Update(${num})`;
  }, [num]);

  return [num];
};

export default useDocumentTitle;
