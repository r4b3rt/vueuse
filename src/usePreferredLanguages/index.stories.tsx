import 'vue-tsx-support/enable-check'
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { createComponent } from '../api'
import { ShowDocs } from '../dev/storybook'
import { usePreferredLanguages } from '.'

const Demo = createComponent({
  setup () {
    return {
      usePreferredLanguages: usePreferredLanguages(),
    }
  },

  render (this: Vue & any) {
    const {
      usePreferredLanguages,
    } = this

    // @ts-ignore
    const Docs: any = <ShowDocs md={require('./index.md')} />

    return (
      <div>
        <div id='demo'>
          <p>Preferred Languages: <code>{usePreferredLanguages.join(', ')}</code></p>
        </div>
        {Docs}
      </div>
    )
  },
})

storiesOf('Browser', module)
  .add('usePreferredLanguages', () => Demo as any)