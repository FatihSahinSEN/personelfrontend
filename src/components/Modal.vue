<template>
  <v-dialog
    v-model="show"
    transition="dialog-top-transition"
    :max-width="maxWidth || 600"
    persistent
  >
    <template v-slot:default>
      <v-container>
        <v-card>
          <slot name="header">
            <v-toolbar
              color="primary"
              dark
            >
              {{ title }}
              <v-spacer />
              <v-btn
                icon
                color="grey"
                @click="$emit('close')"
              >
                <v-icon>{{ icons.mdiWindowClose }}</v-icon>
              </v-btn>
            </v-toolbar>
          </slot>
          <v-card-text style="padding: 1rem">
            <slot name="form"></slot>
            <slot name="footer">
              <div
                class="justify-center align-center"
                style="display: flex"
              >
                <v-btn
                  color="primary"
                  @click="$emit('saveMethod')"
                >
                  {{ saveText }}
                </v-btn>
              </div>
            </slot>
          </v-card-text>
        </v-card>
      </v-container>
    </template>
  </v-dialog>
</template>

<script>
import { mdiWindowClose } from '@mdi/js'

export default {
  name: 'Modal',
  props: {
    show: Boolean,
    title: String,
    close: Boolean,
    saveText: String,
    maxWidth: Number,
  },
  data() {
    return {
      icons: {
        mdiWindowClose,
      },
    }
  },
}
</script>

<style scoped>

</style>
