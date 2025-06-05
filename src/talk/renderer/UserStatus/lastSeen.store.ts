/*
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLastSeenStore = defineStore('lastSeen', () => {
    const lastSeenMap = ref<Record<string, number | null>>({})

    function setLastSeen(userId: string, timestamp: number | null) {
        lastSeenMap.value[userId] = timestamp
    }

    function getLastSeen(userId: string): number | null {
        return lastSeenMap.value[userId] ?? null
    }

    return {
        lastSeenMap,
        setLastSeen,
        getLastSeen,
    }
})
