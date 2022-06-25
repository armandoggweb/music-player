import { bool, InferProps } from 'prop-types';

export default function Arrow({
  forward,
  ...props
}: InferProps<typeof Arrow.propTypes>) {
  return (
    <svg role='img' height='24' width='24' viewBox='0 0 24 24' {...props}>
      {forward ? (
        <path d='M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z'></path>
      ) : (
        <path d='M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z'></path>
      )}
    </svg>
  );
}

Arrow.propTypes = {
  forward: bool,
};
