/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import axios from '@nextcloud/axios'
import { generateOcsUrl } from '@nextcloud/router'

// TODO: add types to @nextcloud/types or @nextcloud/axios
interface OcsResponse<T> {
    ocs: {
        data: T
    }
}

export type PublicUserStatusResponse = {
    userId: string
    status: string
    message: string | null
    icon: string | null
    clearAt: number | null
    lastSeen: number | null
    statusTimestamp: number | null
}

/**
 * Fetch public user status with last seen timestamp
 *
 * @param userId - User id
 */
export async function fetchUserLastSeen(userId: string): Promise<number | null> {
    const response = await axios.get<OcsResponse<PublicUserStatusResponse>>(generateOcsUrl(`apps/user_status/api/v1/user_status?userId=${encodeURIComponent(userId)}&format=json`))
    return response.data.ocs.data.lastSeen ?? response.data.ocs.data.statusTimestamp ?? null
}
