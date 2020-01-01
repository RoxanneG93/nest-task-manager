import { InputType } from 'type-graphql';

import withTimestamps from './withTimestamps';
import {ItemInput} from './input-items.input';

// `AmendUser` is like the full `User` class without the password
@InputType()
export default class AmendItemTimstamps extends withTimestamps(ItemInput) {}

