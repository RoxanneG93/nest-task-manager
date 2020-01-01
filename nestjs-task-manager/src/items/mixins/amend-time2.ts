import { InputType } from 'type-graphql';

import withClasses from './helper1';
import {Item} from '../items.entity';

// `AmendUser` is like the full `User` class without the password
@InputType()
export default class AmendItemTimstamps_Class extends withClasses(Item) {}
