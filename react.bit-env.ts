import { ReactEnv } from '@teambit/react.react-env';
import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import { Preview } from '@teambit/preview';
import { tailwindTransformer } from '@learnbit/styling.transformers.tailwind';

export class ReactTailwindEnv extends ReactEnv {
    name = 'react-tailwind-env';

    /* customize the component preview to include tailwind */
    preview(): EnvHandler<Preview> {
        return ReactPreview.from({
            mounter: require.resolve('./preview/mounter'),
            transformers: [tailwindTransformer({})],
        });
    }
}

export default new ReactTailwindEnv();
