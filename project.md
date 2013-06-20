# 1. Introduction

In this project I will make the case for BASI to move the snowboard technical manuals to an online format. I will describe in depth how such an online system could work, and I will examine techniques used in the world of software development for effective, low-overhead sharing of information to a globally distributed community, and how these could help BASI to equip its members with easily accessible, always up-to-date information on current riding and teaching techniques.

# 2. Background

I’ve spent 8 years developing software professionally. When building a software project, although much of the effort goes into writing code, a huge amount of domain-specific knowledge is accumulated by the team as a side-effect of working on the project. Managing this knowledge in an efficient way is a critical part of the process. It must be shared between current members of the team, communicated to external stakeholders, and easily absorbed by new team members.

Much study has gone into how we as IT professionals can manage our collective knowledge in an efficient way, and this is becoming increasingly important as it becomes more expensive to gather people together to share knowledge. Many people work remotely or on a timeshifted schedule, and they still need to be kept up-to-date with current information.

The world of software development has learnt many lessons about how to share information in a globally distributed community, in a timely and efficient way, and it is my assertion that many of these lessons can be applied to BASI and its objective to disseminate current information to the members.

# 3. Knowledge Sharing in Software Development Teams
## 3.1. Online Content

The first and most fundamental part of my proposal is: make training materials available online. This should not be a surprise given the introduction. The cost alone of publishing manuals in significant quantities should justify this aspect. If we were to do nothing else but take this step, it would be a huge leap.

The advantages are immediately apparent. Snowsports instructors frequently fly to their place of employment on a highly restrictive baggage allowance, making very hard choices about what to bring and what to leave behind. Expecting us to carry a heavy textbook is hardly reasonable. Additionally, as the quantity of information grows, it gets harder to use the textbook as a reference. Paper books are not searchable, and this is a huge win for online content.

The material is already prepared on computer so it simply becomes a question of distribution to make it available to members.

Simply distributing the content electronically, while a significant advantage, does not necessarily address the shortcomings of the overall process for publishing training material, which I will address in the following sections.

## 3.2. Wiki

A wiki is defined (by Wikipedia) as:

> a website which allows people to add, modify, or delete the content via a web browser usually using a simplified markup language or a rich-text editor. Wikis use specialized wiki software and are usually created collaboratively.
>
> <small>Wikipedia <cite title="Source Title">https://en.wikipedia.org/wiki/Wiki</cite></small>

They are described as having the following key characteristics:

> A wiki invites all users to edit any page or to create new pages within the wiki Web site, using only a plain-vanilla Web browser without any extra add-ons.
>
> Wiki promotes meaningful topic associations between different pages by making page link creation almost intuitively easy and showing whether an intended target page exists or not.
>
> A wiki is not a carefully crafted site for casual visitors. Instead, it seeks to involve the visitor in an ongoing process of creation and collaboration that constantly changes the Web site landscape.
>
> <small>Ward Cunningham and Bo Leuf <cite title="Source Title">The Wiki Way: Quick Collaboration on the Web</cite></small>

This is notably different from the traditional structured training materials issued by organisations, which attempt to define a large body of knowledge as a start-to-finish journey, often facing significant difficulty actually deciding how to subdivide their knowledge and in what sequence to present it.

A wiki offers a much looser, more flexible approach to knowledge presentation. It can be as structured or unstructured as desired. It can even be both. Each ‘page’ of the wiki is a self-contained piece of knowledge. It can link to other pages, and other pages can link to it. It can be directly accessed if somebody bookmarks it, or searches for it, or is pointed to it by an external reference. Additionally, index pages can be created for newcomers who wish for a suggested order of reading.

Wikis encourage rich interlinking of pages. In well-maintained wikis such as Wikipedia, almost every reference to something not directly covered by the current page, is a link to another page which gives the full detail.

This is extremely relevant to BASI’s technical content, which is full of interrelated concepts. A BASI wiki would encourage every reference to ‘flow’ linked to the specific page on flow, which would in turn link to its subsections, as well as common exercises for developing flow. Any reference to diagonal sideslip would be linked to the page on diagonal sideslip, which would link upwards to the overall Central Theme page, as well as the following and preceding stages in the Central Theme. As a consumer of information, the ability to quickly navigate around a large body of knowledge, in either a structured or completely freeform fashion, is a massive improvement over printed textbooks, or even an online publication that follows the structure and layout of a printed book.

Wikis are often described as ‘living documents’, meaning that the knowledge contained within is always kept current. It is considered a central ‘source of truth’, and as such should always be referred to directly, rather than having copies taken and distributed which effectively creates a point-in-time snapshot, which is the case with printed material, or distributed PDF documents.

## 3.3. Rapidly Update

The most recent update to the Alpine and Generic manuals followed the previous version by 5 years. The current Snowboard manual has not been updated for 7 years. Clearly, the techniques being taught on courses evolve more rapidly than that.

Creating an entirely new body of training material at very long intervals is a poor way to deliver information. Presumably the process came about because of the prohibitively expensive nature of large-scale printing and distribution.

In order that the training material that is in the hands of the members does not become stale and irrelevant in the face of new information that is shared only among trainers and those who have very recently completed training courses, it’s important that the training material be updated frequently. It should be a ‘living document’ that always reflects the current state of the art.

Electronic distribution enables rapid delivery of updates, without the overhead of printed materials. Importantly such freedom enables corrections to be issued just as rapidly, so the preparation of new material can be slightly less rigorous, safe in the knowledge that if a mistake does make it into the wild, it can be cheaply rectified, something impossible with printed material.

Ideally, updates should be incorporated into the training material and distributed, as soon as they are agreed upon. The ability to rapidly issue updates come with a few issues of its own however, discussed in the next 2 sections.

## 3.4. Track Changes

In software development, the history of any given piece of code is just as important as the current state of it. By maintaining and publishing a history of all changes, we are free to delete information which is no longer salient, without lengthy explanations of why it is no longer relevant. Instead, we record details of how the code was changed, and the reason for the change, so the current state is clean and free of legacy, but the full story of how it came to be is apparent to anyone who wants to explore the history of it.

The reasoning behind changes is always of interest to those who have already internalised a previous version of some information. Electronic distribution mechanisms allow us to view the current state of information, with an option to peruse the history if desired.

This is particularly effective when updates are delivered rapidly. If this is the case, then each change will be a small enough unit to digest easily. Getting an entirely re-written training manual leaves us on our own to try and establish ‘what new things do I need to know?’

Useful history does not come for free with online distribution. It must be curated and presented properly to be of use. When a change is made, the author needs to take care to explain their reasoning. Additionally, care should be taken to make changes in small, related units.

## 3.5. Reach Consensus Via Proposals

Software developers, like snowsports instructors, are highly opinionated people. This makes it difficult for a group of them to reach agreement when discussing the ‘way things should be’. It is made many times more difficult when conversations are held in the abstract, trying to discuss concepts which (by the nature of software development) are intangible in nature.

A popular trend recently has been to instigate change in the form of a change proposal. This is an actual set of changes, written by the author, as a starting point for discussion. The act of setting out proposed changes provides a concrete reference point, so that discussion around it is far more focused and productive than arguing for or against a concept which every participant is visualising slightly differently.

This process is usually supported by online tools, which allow the proposer to make their desired change, and invite colleagues to participate. Viewers get to see the proposed changes highlighted, usually along with explanatory notes from the author. Often they are able to add comments to the overall proposal, or to specific parts, and the author can respond to these and optionally revise their proposal. If all the reviewers agree, then the tool allows the changes to be automatically incorporated into the project. In this case the completed proposal forms an important part of the history of the project - anyone questioning a historical decision can see the full discussion that took place. Sometimes agreement cannot be reached, even after meeting in-person to discuss the proposal. In this case the proposal is usually archived as a useful piece of history explaining why a certain direction wasn’t followed.

## 3.6. Rich Content, Limited Layout

Software concepts are frequently hard to grasp through words alone, so are often backed up with diagrams to help the reader visualise the meaning. Occasionally information is distributed in video form if the extra visual communication is worthwhile. Frequently lists of information and tables are used in written communication to add clarity and conciseness.

Despite the rich visual communications tools available, developers deliberately avoid specifying visual layout and formatting when preparing documentation. This is partly driven by a principle called ‘separation of concerns’ which advocates separating content from presentation, allowing the author to focus purely on content. A core benefit of this is that information is easily viewable on multiple devices, e.g. large screen computer, medium sized laptop, iPad, or smartphone. When the exact location of every piece of text, image, or table, is left open, unlike rigid print layouts, the technology is free to flow the visual elements around in whatever manner makes most sense for the viewer. This is a fundamental principle of the World Wide Web, and a key reason why it is intentionally difficult to achieve precise layouts in web design.

One of the ways this limited layout is achieved, is to write all documentation using a simplified text-based markup language. Unlike traditional word-processing systems, which allow rich in-place WYSIWYG (What You See Is What You Get) editing, with great control over fonts, colours, and styling, these simplified languages use special characters to indicate headings, lists, tables, and hyperlinks (references to other documents, or images to show). Once again, this constrained language forces the author to focus on content, and allows the final look to be laid out in the most appropriate way for the viewer.

A side-benefit of such a limited notation comes when trying to compare two versions of a document. It turns out to be very easy to compare simple textual content and highlight differences in a usable way. This is not so true of richly-formatted documents with many possible manipulations that can be performed on the content.

## 3.7 Feedback

In situations where there is a distinction between the producers and consumers of information, feedback from the consumers is extremely important. In this scenario the authors are generally not also consumers themselves, which means they are limited in predicting how their material will be received. Consumers who are trying to assimilate the information will almost certainly discover areas which lack sufficient detail, clarity, or consistency - they are an invaluable resource in ensuring the information is sufficiently well presented.

Some mechanism needs to be in place for consumers to ask questions about the information supplied to them. If the question reveals room for improvement in the published information, then this should be reflected in a rapidly-released update to the information, so that all the other consumers may benefit from it. If this does not occur then the same question will likely be raised over and over again, which is probably a familiar situation to BASI trainers.

# 4. The Ideal Online Training Manual

This section will draw on the principles explained in the previous section, to walk through how an online training manual could function.

## 4.1 Content creation
## 4.2 Content consumption
## 4.3 Offline access
## 4.4 Keeping history
## 4.5 Propose revisions

# 5. Suggested Topic Organisation - Snowboard Technical

* Here, suggest how the content in the snowboard tech manual might translate into a set of wiki pages
