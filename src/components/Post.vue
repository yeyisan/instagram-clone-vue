<template>
  <div class="post">
    <!-- header -->
    <header class="header section">
      <div class="header-author">
        <Avatar size="40"></Avatar>
        <div class="header-author-info">
          <div>
            <CustomText tag="b">Yusuf Eyisan</CustomText>
          </div>
          <div>
            <CustomText size="xsmall">Tuzla, Istanbul</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore></IconMore>
        </button>
      </div>
    </header>
    <!-- media -->
    <div class="post-media">
      <img
        src="https://instagram.fist13-1.fna.fbcdn.net/v/t51.2885-15/e35/100715038_872945063180964_6046402728636489446_n.jpg?_nc_ht=instagram.fist13-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fAqVSNC6zYwAX8imiU7&oh=2887e4b44a6afd65396c23b42c941d63&oe=5F63D24F"
        alt=""
      />
    </div>
    <!-- actions -->
    <div class="action-buttons section">
      <button type="button">
        <IconLike></IconLike>
      </button>
      <button type="button">
        <IconComment></IconComment>
      </button>
      <button type="button">
        <IconDM></IconDM>
      </button>
      <button class="action-save" type="button">
        <IconSave></IconSave>
      </button>
    </div>
    <!-- view count -->
    <div class="view-count section">
      <CustomText tag="b"> 1,345 likes</CustomText>
    </div>
    <!-- comment list-->
    <!-- date time -->
    <!-- comment form -->
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import CustomText from '@/components/CustomText'
import IconMore from '@/icons/post-more-options.svg'
import IconLike from '@/icons/post-like.svg'
import IconComment from '@/icons/post-comment.svg'
import IconDM from '@/icons/post-share.svg'
import IconSave from '@/icons/post-save.svg'
export default {
  name: 'Post',
  components: {
    CustomText,
    Avatar,
    IconMore,
    IconComment,
    IconLike,
    IconDM,
    IconSave
  }
}
</script>

<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
}

.section {
  padding-right: 16px;
  padding-left: 16px;
}

.header {
  height: 60px;
  display: flex;
  align-items: center;
  &-author {
    display: flex;
    align-items: center;
    margin-right: auto;
    &-info {
      margin-left: 8px;
    }
  }
  &-more {
  }
}

.action-buttons {
  height: 45px;
  display: flex;
  align-items: center;

  button {
    margin-right: 16px;
  }
  .action-save {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
