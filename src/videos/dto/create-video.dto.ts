export class CreateVideoDto {
  readonly title: string;
  readonly artist: string;
  readonly country: string;
  readonly youtubeLink: string;
  readonly youtubeChannel: string;
  readonly tags: string[];
}
