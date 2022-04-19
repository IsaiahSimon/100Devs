A Responsive website has to be Fluid, Elastic, and appropriate Content Decisions.
A Responsive website should be "Fluid".
"Fluidity" in a Responsive website means to have everything set as a Percentage
A Responsive website should have "Fluidity", so it responds natively.
A Responsive website should have "Elastic" fonts and texts.
Responsive websites should use responsive units of measure like <CODE>em</CODE> and <CODE>rem</CODE> to be "Elastic".
<CODE>em</CODE> is a responsive unit of measure that gets its size from its **closest** parent element.
The problem with <CODE>em</CODE> units is; if the "closet parent" changes, the font size will change too.
<CODE>rem</CODE> is a responsive unit of measure that gets its size ONLY from the <CODE>html</CODE> element.
A typical value for setting <CODE>rem</CODE> is to set the <CODE>html</CODE> <CODE>font-size: 62.5%</CODE>, which equates to 10px. (based off 16px)
Making "Content Decisions" on a Responsive website means asking, "What content do we want to show on this type of device?"
We use Media Queries to implement "Content Decisions" in a Responsive website.
The two main philosophies for implementing Media Queries in a Responsive website are: "Desktop First" and "Mobile First"
The Flexbox Layout module aims to provide a more efficient way to lay out, align and distribute space among items in a container; even when their size is unknown and/or dynamic.
Flexbox gives a container the ability to alter its items’ width, width and order to best fill the available space.
Flexbox allows containers to alter their contents to accommodate to all kind of display devices and screen sizes.
A Flex container expands items to fill available free space or shrinks them to prevent overflow.
Flexbox layouts are direction-agnostic, compared to regular layouts.
Flexbox layouts do not care about direction; unlike Regular layouts. Blocks are vertically-based and inline are horizontally-based.
If “regular” layout is based on both block and inline flow directions, the flex layout is based on “flex-flow directions”.
Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.
The Flexbox layout is intended for the components of an application, and small-scale layouts.
The Grid layout is intended for larger scale layouts.
Flexbox is an entire module, not a single property.
The Flexbox module includes its own set of properties.
Some Flexbox properties are meant to be set on parent element, aka, the "flex container"
Some Flexbox properties are meant to be set on child element, aka, the "flex items"
With Flex-flow directions, items will be laid out following either the Main axis or the Cross axis.
The Main axis of a flex container is the primary axis along which flex items are laid out.
The flexbox Main axis goes from main-start to main-end.
The flex items are placed within the container starting from main-start and going to main-end.
Beware! The flexbox Main axis is not necessarily horizontal; it depends on the flex-direction property.
A flex item’s width or height, whichever is in the main dimension, is the item’s Main size.
The flex item’s main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.
The flexbox axis perpendicular to the Main axis is called the Cross axis.
The flexbox Cross axis direction depends on the Main axis direction.
The flexbox Cross axis goes from cross-start to cross-end.
The width or height of a flex item, whichever is in the cross dimension, is the item’s Cross size.
The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.
The flex container <CODE>display</CODE> property defines a flex container; inline or block depending on the given value.
The flex container <CODE>display</CODE> property enables a flex context for all its direct children.
The <CODE>display</CODE> property can accept 2 values: <CODE>flex</CODE> | <CODE>inline-flex</CODE>
 The flex container <CODE>flex-flow</CODE> property is a shorthand for the <CODE>flex-direction</CODE> and <CODE>flex-wrap</CODE> properties combined.
When you want to combine the <CODE>flex-direction</CODE> and <CODE>flex-wrap</CODE> properties, you can use <CODE>flex-flow</CODE>.
</code>flex-flow</CODE> = <CODE>flex-direction</CODE> + <CODE>flex-wrap</code>
The <CODE>flex-flow</CODE> property can accept a combo of 4 + 3 inherited values:(<CODE>row</CODE>  | <CODE>row-reverse</CODE> | <CODE>column</CODE> | <CODE>column-reverse</CODE>) + (<CODE>nowrap</CODE>  | <CODE>wrap</CODE> | <CODE>wrap-reverse</CODE>)
The flex container <CODE>flex-direction</CODE> property establishes the main-axis.
The flex container <CODE>flex-direction</CODE> property defines the direction flex items are placed in the flex container.
Flexbox is a single-direction layout concept, (aside from optional wrapping).
Think of flex items as primarily laying out either in horizontal rows or vertical columns.
Note: When you set the <CODE>flex-direction</CODE> to a reversed row or column, <CODE>start</CODE> and <CODE>end</CODE> are also reversed!
Note: When the <CODE>flex-direction</CODE> is a column, <CODE>justify-content</CODE> changes to the vertical and <CODE>align-items</CODE> to the horizontal.
The <CODE>flex-direction</CODE> property can accept 4 values: <CODE>row</CODE>  | <CODE>row-reverse</CODE> | <CODE>column</CODE> | <CODE>column-reverse</CODE>.
The <CODE>flex-wrap</CODE> property will try to fit all flex items onto one line by default.
Changing the <CODE>flex-wrap</CODE> property's default <CODE>nowrap</CODE> value, will allow the flex items to wrap as needed.
The <CODE>flex-wrap</CODE> property can accept 3 values: <CODE>nowrap</CODE>  | <CODE>wrap</CODE> | <CODE>wrap-reverse</code>
The flex container <CODE>justify-content</CODE> property defines the alignment along the main axis.
The flex container <CODE>justify-content</CODE> helps distribute extra space when all the flex items on a line are inflexible.
The flex container <CODE>justify-content</CODE> helps distribute extra space when all the flex items on a line are flexible, but have reached their max size.
The flex container <CODE>justify-content</CODE>  exerts some control over the alignment of items when they overflow the line.
The <CODE>justify-content</CODE> property can accept 10 values + 2 keywords:(<CODE>flex-start</CODE>  | <CODE>flex-end</CODE> | <CODE>center</CODE> | <CODE>space-between</CODE> | <CODE>space-around</CODE> | <CODE>space-evenly</CODE> | <CODE>start</CODE> | <CODE>end</CODE> | <CODE>left</CODE> | <CODE>right</CODE>) + (<CODE>safe</CODE> | <CODE>unsafe</CODE>)
The flex container <CODE>align-content</CODE> property aligns a flex container’s lines when there is extra space in the cross-axis.
The flex container <CODE>align-content</CODE> property is similar to how <CODE>justify-content</CODE> aligns individual items within the main-axis.
^^Beware!^^ The <CODE>align-content</CODE> property only takes effect on multi-line flexible containers, where flex-wrap is set to either <CODE>wrap</CODE> or <CODE>wrap-reverse</CODE>).
^^Beware!^^ A single-line flexible container (i.e. where <CODE>flex-wrap</CODE> is set to its default value, <CODE>no-wrap</CODE>) will not reflect <CODE>align-content</CODE>.
The <CODE>align-content</CODE> property can accept 12 values + 2 keywords: (<CODE>flex-start</CODE> | <CODE>flex-end</CODE> | <CODE>center</CODE> | <CODE>space-between</CODE> | <CODE>space-around</CODE> | <CODE>space-evenly</CODE> | <CODE>stretch</CODE> | <CODE>start</CODE> | <CODE>end</CODE> | <CODE>baseline</CODE> | <CODE>first baseline</CODE> | <CODE>last baseline</CODE>) + (<CODE>safe</CODE> | <CODE>unsafe</CODE>)
The flex container <CODE>align-items</CODE> property defines the default behavior for how flex items are laid out along the cross axis on the current line.
Think of the flex container <CODE>align-items</CODE> property as the <CODE>justify-content</CODE> version for the cross-axis (perpendicular to the main-axis).
The <CODE>align-items</CODE> property can accept 11 values + 2 keywords:(<CODE>stretch</CODE>  | <CODE>flex-start</CODE> |</code>flex-end</CODE>  | <CODE>center</CODE> | <CODE>baseline</CODE> | first baseline</CODE> | <CODE>last baseline</CODE> | <CODE>start</CODE> | <CODE>end</CODE> | <CODE>self-start</CODE> | <CODE>self-end</CODE>) + (<CODE>safe</CODE> | <CODE>unsafe</CODE>)
The flex container <CODE>gap</CODE> property explicitly controls the space between flex items.
The flex container <CODE>gap</CODE> property only applies spacing between items, not on the outer edges.
The <CODE>gap</CODE> property behaves like a "minimum gutter".
If the gutter is bigger, then the <CODE>gap</CODE> property will only take effect if that space would end up smaller.
<code>gap</CODE> is not exclusively for flexbox, <CODE>gap</CODE> works in grid and multi-column layout as well.
The <CODE>gap</CODE> property can accept 3 values + 1 shorthand: <CODE>gap</CODE> | <CODE>row-gap</CODE> | <CODE>column-gap</CODE> shorthand: <CODE>gap: 10px 20px;  /* row-gap column gap */)<CODE>
The flex items <CODE>order</CODE> property lays out flex items in the source order by default.
The flex items <CODE>order</CODE> property controls the order in which they appear in the flex container.
The default value of the flex items <CODE>order</CODE> property is: <CODE>0</CODE>
The flex items <CODE>flex</CODE> property is the shorthand for <CODE>flex-grow</CODE>, <CODE>flex-shrink</CODE> and <CODE>flex-basis</CODE> combined.
With the <CODE>flex</CODE> property, the second and third parameters (flex-shrink and flex-basis) are optional.
The default of <CODE>flex</CODE> is <CODE>0 1 auto</code>
If you set <CODE>flex</CODE> with only 1 value, then the <CODE>flex-basis</CODE> part will default to <CODE>0%</CODE> instead of <CODE>auto</CODE>.
It is recommended that you use the <CODE>flex</CODE> shorthand property rather than set the individual 3 properties.
The <CODE>flex</CODE> shorthand sets the other 3 values intelligently.
The flex items <CODE>flex-grow</CODE> property defines the ability for a flex item to grow if necessary.
The flex items <CODE>flex-grow</CODE> property accepts a unitless value that serves as a proportion.
The value of the <CODE>flex-grow</CODE> property dictates what amount of the available space the item should take up within the flex container .
The flex items <CODE>flex-grow</CODE> property cannot accept negative numbers.
The default value of the <CODE>flex-grow</CODE> property is: <CODE>0</CODE>
The flex items <CODE>flex-shrink</CODE> property defines the ability for a flex item to shrink if necessary.
The default value of the <CODE>flex-shrink</CODE> property is: <CODE>1</CODE>
The flex items <CODE>flex-basis</CODE> property defines the default size of an element before the remaining space is distributed.
If <CODE>flex-basis</CODE> is set to <CODE>0</CODE>, the extra space around content isn’t factored in.
If <CODE>flex-basis</CODE> is set to <CODE>auto</CODE>, the extra space is distributed based on its <CODE>flex-grow</CODE> value.
The default value of the <CODE>flex-basis</CODE> property is: <CODE>auto</code>
The flex items <CODE>align-self</CODE> property allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.
The flex items <CODE>align-self</CODE> property accepts the same values as the flex container <CODE>align-items</CODE> property: <CODE>auto</CODE> | <CODE>flex-start</CODE> | <CODE>flex-end</CODE> | <CODE>center</CODE> | <CODE>baseline</CODE> | <CODE>stretch</code>
Note that <CODE>float</CODE>, <CODE>clear</CODE> and <CODE>vertical-align</CODE> have no effect on a flex item.
Flexbox requires some vendor prefixing to support the most browsers possible.
Because the Flexbox spec has changed over time, there is an “old”, “tweener”, and “new” versions of Flexbox.
Some properties related to using Flexbox are: <CODE>gap</CODE>, <CODE>place-items</CODE>, <CODE>grid-row</CODE> / <CODE>grid-column</CODE>, <CODE>grid-template-columns</CODE> / <CODE>grid-template-rows</CODE>, <CODE>justify-items</code>
CSS rule = selector + declaration block --> declarations = property + value
Networking with people is the real way to get a job!
Connect with 3 individuals in tech, and have 2 additional "coffee chats" EVERY WEEK!
The GOAL of networking is to turn a Stranger into a Co-worker, but first you must turn them into a Friend.
Stranger > Acquaintance > Friend > Referral > Coworker
Job Referrals get your resume actually seen.
Job Referrals may allow you to skip 1st round interviews.
The only people that I should be connected with on LinkedIn are those that I've had an actual interaction with.
I can find Networking Events by starting at Meetup.com and then find local boards.
I can look for the closest city near me with tech jobs and start attending Networking Events there.
Local networking events are better than remote networking events.
I can follow up after networking with someone by using Spaced Repetition:
Coffee Chat request: Email Follow Up 1 (1 Week) > Email Follow Up 2 (2 Weeks)> Last Email (1 Month)
I can keep track of my Networking by using the Google Sheet.
I can create an Alert about a new networking contact by using [Google Alerts](https://www.google.com/alerts).
The difference between Color types in CSS (keyword, hex, RGBa, HSLa) comes down to minor differences in Performance.