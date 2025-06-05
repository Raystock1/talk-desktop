<!--
  - SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<script setup lang="ts">
import { computed } from 'vue'
import { t } from '@nextcloud/l10n'
import { formatRelativeTimeFromNow } from '../../../shared/datetime.utils.ts'

const props = defineProps<{ lastSeen: number | null }>()

const lastSeenLabel = computed(() => {
    if (!props.lastSeen) {
        return t('talk_desktop', 'Last online')
    }
    const time = formatRelativeTimeFromNow(props.lastSeen * 1000)
    return t('talk_desktop', 'Last online {time}', { time })
})
</script>

<template>
    <span class="last-seen">{{ lastSeenLabel }}</span>
</template>

<style scoped>
.last-seen {
    opacity: 0.6;
    font-size: var(--font-size-small);
}
</style>
