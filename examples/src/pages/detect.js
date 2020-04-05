import { qs } from '@okiba/core/dom'
import { hasTouch, hasPassiveEvents } from '@okiba/ui/detect'

qs('#touch').innerText = hasTouch ? 'true' : 'false'
qs('#passive-events').innerText = hasPassiveEvents ? 'true' : 'false'
