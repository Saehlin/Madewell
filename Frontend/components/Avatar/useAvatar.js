import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOutfit } from '../../redux/actions/avatar';

export const image = (closet, id) => `avatar/img/${closet}/${closet}${id}.png`;

export const unlockable = (id, closet, price, unlocked) => ({
  id,
  closet,
  price,
  unlocked,
  image: image(closet, id)
});

const wear = (outfit, unlockable) => {
  switch (unlockable.closet) {
    case 'dresses': return {
      ...outfit,
      [unlockable.closet]: unlockable,
      tops: null,
      bottoms: null,
    };
    case 'tops':
    case 'bottoms': return {
      ...outfit,
      [unlockable.closet]: unlockable,
      dresses: null,
    };
    case 'shoes':
    case 'accessoires': return {
      ...outfit,
      [unlockable.closet]: (
        unlockable.closet === outfit[unlockable.closet]?.id &&
        unlockable.id === outfit[unlockable.closet]?.id
          ? null
          : unlockable
      ),
    };
  }
};

const undress = (outfit, unlockable) => ({
  ...outfit,
  [unlockable.closet]: null
});

const useAvatar = () => {
  // @ts-ignore
  const outfit = useSelector(state => state.avatar.outfit);
  const [fitting, setFitting] = React.useState(outfit);
  const dispatch = useDispatch();

  return {
    outfit: fitting,
    onWear: (unlockable) => setFitting(wear(fitting, unlockable)),
    onUndress: (unlockable) => setFitting(undress(fitting, unlockable)),
    onSave: () => dispatch(setOutfit(fitting))
  }
}

export default useAvatar;