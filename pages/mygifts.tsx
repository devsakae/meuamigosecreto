import React, { useEffect, useState } from 'react'
import useMASContext from '../hooks/useMASContext'

type Props = {}

const mygifts = (props: Props) => {
  const { fetchMyGifts } = useMASContext();
  const [myGifts, setMyGifts] = useState<any[]>([]);

  const getGifts = async () => {
    const response = await fetchMyGifts();
    setMyGifts(response);
  };

  useEffect(() => {
    getGifts();
  }, []);

  return (
    <div>
      { myGifts.map((g, i) => (
        <div key={ i }>
          { g.title }
        </div>
      )) }
    </div>
  )
}

export default mygifts