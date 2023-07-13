import { capitalizeEveryWord } from 'helpers/utils';

/**
 * Solar System Icon
 */
export const Image = (args: any) => {
  const style = args?.style || {};
  const backgroundColor = '#708090';
  const textColor = '#fff';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="default_image"
      height="600"
      width="600"
      viewBox="0 0 550 550"
      fontFamily="Arial"
      fill="#C0C0C0"
      {...style}
    >
      <rect width="100%" height="100%" fill={backgroundColor} />
      <g transform="translate(20, 20)" opacity={0.4}>
        <g>
          <g>
            <path
              d="M349.866,247.47H315.05c-1.451-10.095-5.427-19.362-11.281-27.17l26.53-26.53c3.337-3.337,3.337-8.73,0-12.066
c-3.336-3.336-8.73-3.336-12.066,0l-26.53,26.53c-7.808-5.854-17.075-9.83-27.17-11.281v-34.816c0-4.719-3.814-8.533-8.533-8.533
s-8.533,3.814-8.533,8.533v34.816c-10.095,1.451-19.362,5.427-27.17,11.281l-26.53-26.53c-3.337-3.336-8.73-3.336-12.066,0
c-3.336,3.337-3.336,8.73,0,12.066l26.53,26.53c-5.854,7.808-9.83,17.075-11.281,27.17h-34.816c-4.719,0-8.533,3.814-8.533,8.533
s3.814,8.533,8.533,8.533h34.816c1.451,10.095,5.427,19.362,11.281,27.17l-26.53,26.53c-3.336,3.337-3.336,8.73,0,12.066
c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5l26.53-26.53c7.808,5.854,17.075,9.83,27.17,11.281v34.816
c0,4.719,3.814,8.533,8.533,8.533s8.533-3.814,8.533-8.533v-34.816c10.095-1.451,19.362-5.427,27.17-11.281l26.53,26.53
c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5c3.337-3.336,3.337-8.73,0-12.066l-26.53-26.53
c5.854-7.808,9.83-17.075,11.281-27.17h34.816c4.719,0,8.533-3.814,8.533-8.533S354.585,247.47,349.866,247.47z"
            />
            <path
              d="M255.999,68.27c-67.652,0-129.357,36.13-162.833,94.66c-2.543-0.478-5.146-0.794-7.834-0.794
c-23.526,0-42.667,19.14-42.667,42.667c0,17.69,10.829,32.888,26.197,39.347c-0.247,3.968-0.597,7.962-0.597,11.853
c0,103.518,84.215,187.733,187.733,187.733s187.733-84.215,187.733-187.733S359.517,68.27,255.999,68.27z M255.999,426.67
c-94.106,0-170.667-76.561-170.667-170.667c0-2.816,0.077-5.666,0.213-8.533c1.579-0.009,3.063-0.307,4.591-0.486
c1.289-0.145,2.62-0.154,3.874-0.41c1.51-0.316,2.901-0.887,4.352-1.357c1.212-0.393,2.475-0.648,3.627-1.143
c1.365-0.58,2.594-1.391,3.883-2.108c1.118-0.623,2.304-1.126,3.354-1.835c1.195-0.811,2.219-1.826,3.328-2.748
c0.99-0.828,2.057-1.553,2.97-2.466c1.024-1.033,1.86-2.236,2.773-3.362c0.802-0.99,1.707-1.894,2.423-2.953
c0.853-1.254,1.468-2.662,2.176-4.002c0.58-1.084,1.271-2.099,1.749-3.234c0.683-1.604,1.092-3.337,1.57-5.035
c0.282-0.998,0.708-1.929,0.913-2.953c0.572-2.773,0.87-5.641,0.87-8.576c0-2.543-0.307-5.026-0.759-7.475
c-0.111-0.657-0.23-1.314-0.375-1.971c-0.503-2.159-1.135-4.267-1.963-6.306c-0.35-0.862-0.768-1.673-1.169-2.509
c-0.606-1.263-1.271-2.492-2.005-3.686c-0.631-1.05-1.271-2.074-1.988-3.055c-1.007-1.382-2.099-2.705-3.268-3.959
c-0.802-0.862-1.638-1.664-2.509-2.449c-0.879-0.811-1.809-1.553-2.765-2.278c-0.734-0.572-1.382-1.229-2.159-1.749
c30.686-52.045,86.229-84.028,146.961-84.028c94.106,0,170.667,76.561,170.667,170.667S350.105,426.67,255.999,426.67z"
            />
            <path
              d="M512,256c0-52.796-16.017-103.518-46.285-146.714c12.527-9.344,20.685-24.226,20.685-41.02
c0-28.228-22.963-51.2-51.2-51.2c-17.647,0-33.229,8.977-42.445,22.596C351.821,13.722,304.546,0,256,0
C114.842,0,0,114.842,0,256s114.842,256,256,256c42.709,0,84.727-10.837,122.121-31.181c7.808,8.61,18.97,14.114,31.479,14.114
c23.526,0,42.667-19.14,42.667-42.667c0-8.798-2.688-16.99-7.27-23.791C488.226,381.184,512,320.256,512,256z M432.905,416.521
c-2.005-1.314-4.13-2.389-6.315-3.345c-0.452-0.188-0.913-0.333-1.374-0.512c-1.92-0.759-3.891-1.374-5.914-1.843
c-0.657-0.154-1.297-0.307-1.963-0.435c-2.534-0.461-5.112-0.785-7.74-0.785c-23.526,0-42.667,19.149-42.667,42.667
c0,2.586,0.29,5.146,0.777,7.689c0.256,1.417,0.7,2.756,1.092,4.122c0.222,0.734,0.333,1.493,0.589,2.219
c-34.739,18.756-73.779,28.638-113.391,28.638C124.245,494.933,17.067,387.755,17.067,256
C17.067,124.254,124.245,17.067,256,17.067c45.193,0,89.208,12.732,127.334,36.813l2.219,2.108
C384.572,59.93,384,64.034,384,68.267c0,28.237,22.963,51.2,51.2,51.2c2.244,0,4.446-0.188,6.613-0.469
c0.589-0.077,1.161-0.171,1.741-0.273c1.869-0.307,3.703-0.708,5.504-1.212c0.247-0.068,0.512-0.094,0.759-0.171l2.176,2.082
c28.092,40.226,42.94,87.441,42.94,136.576C494.933,315.742,472.969,372.437,432.905,416.521z"
            />
          </g>
        </g>
      </g>
      <text fill={textColor} textAnchor="middle" x="50%" y="360" fontSize={58}>
        {capitalizeEveryWord(args.name)}
      </text>
      <text fill={textColor} textAnchor="middle" x="50%" y="290" fontSize={40}>
        at
      </text>
      <text fill={textColor} textAnchor="middle" x="50%" y="220" fontSize={62}>
        {capitalizeEveryWord(args.role)}
      </text>
    </svg>
  );
};

export default Image;
