import { TestBed, inject } from '@angular/core/testing';

import { NewsFeedContentService } from './news-feed-content.service';

describe('NewsFeedContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsFeedContentService]
    });
  });

  it('should be created', inject([NewsFeedContentService], (service: NewsFeedContentService) => {
    expect(service).toBeTruthy();
  }));
});
